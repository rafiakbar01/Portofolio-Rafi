import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Eye, Calendar, TrendingUp, Users } from 'lucide-react'

// === Supabase Setup ===
const supabaseUrl = "https://uamdluowoloabatbxfks.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVhbWRsdW93b2xvYWJhdGJ4ZmtzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA5OTcwODAsImV4cCI6MjA3NjU3MzA4MH0.zY7m38Es8Rly37SBG9P8i6byFDNt_GHSuFxSCT5VE_Y"
const supabase = createClient(supabaseUrl, supabaseKey)

interface VisitorStats {
  totalVisitors: number
  dailyVisitors: number
  lastVisitDate: string
}

function getTodayJakartaISODate() {
  const jakartaDate = new Date(
    new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" })
  )
  return jakartaDate.toISOString().split('T')[0]
}

const VisitorCounter = () => {
  const [stats, setStats] = useState<VisitorStats>({
    totalVisitors: 0,
    dailyVisitors: 0,
    lastVisitDate: '',
  })
  const [isNewVisitor, setIsNewVisitor] = useState(false)

  // Ambil statistik
  const fetchStats = async () => {
    const today = getTodayJakartaISODate()
    const { data, error } = await supabase.from('visitors').select('*')
    if (error) {
      console.error(error)
      return
    }

    const total = data.length
    const daily = data.filter((v) => v.date === today).length

    setStats({
      totalVisitors: total,
      dailyVisitors: daily,
      lastVisitDate: today,
    })
  }

  // Simpan kunjungan baru jika belum ada
  const recordVisit = async () => {
    const today = getTodayJakartaISODate()

    try {
      // ambil IP publik
      const res = await fetch('https://api.ipify.org?format=json')
      const ipData = await res.json()
      const ip = ipData.ip

      // cek apakah IP sudah ada hari ini
      const { data: existing, error: checkError } = await supabase
        .from('visitors')
        .select('*')
        .eq('date', today)
        .eq('ip_address', ip)
        .maybeSingle()

      if (checkError) {
        console.error('Error checking visitor:', checkError)
        return
      }

      if (!existing) {
        // belum ada, maka simpan
        const { error: insertError } = await supabase
          .from('visitors')
          .insert([{ date: today, ip_address: ip }])
        if (insertError) console.error('Insert error:', insertError)
        else setIsNewVisitor(true)
      } else {
        console.log('👀 Pengunjung dengan IP ini sudah tercatat hari ini.')
      }
    } catch (err) {
      console.error('Error fetching IP:', err)
    }
  }

  useEffect(() => {
    fetchStats()
    recordVisit()

    // Realtime listener
    const channel = supabase
      .channel('visitor_changes')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'visitors' },
        () => fetchStats()
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  const formatDate = (dateString: string) => {
    if (!dateString) return ""
    const date = new Date(dateString + "T00:00:00+07:00")
    return date.toLocaleDateString('id-ID', {
      timeZone: "Asia/Jakarta",
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })
  }

  return (
    <section className="py-16 bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="text-center mb-10">
          <div className="flex justify-center items-center gap-2 mb-2">
            <Eye className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold text-gray-800">
              Visitor Analytics
            </h2>
          </div>
          <p className="text-sm text-gray-600">
            Statistik pengunjung portofolio ini
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Calendar className="h-5 w-5 text-green-600" />
              <h3 className="text-sm font-semibold text-green-700">
                Kunjungan Hari Ini
              </h3>
            </div>
            <p className="text-3xl font-bold text-green-600">
              {stats.dailyVisitors.toLocaleString()}
            </p>
            <p className="text-xs text-green-500 mt-1">
              {formatDate(stats.lastVisitDate)}
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Users className="h-5 w-5 text-primary" />
              <h3 className="text-sm font-semibold text-gray-600">
                Total Pengunjung
              </h3>
            </div>
            <p className="text-3xl font-bold text-primary">
              {stats.totalVisitors.toLocaleString()}
            </p>
          </div>
        </div>

        {isNewVisitor && (
          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-2 text-sm text-green-700 bg-green-100 px-4 py-2 rounded-lg shadow-sm">
              <TrendingUp className="h-4 w-4" />
              <span>Kunjungan baru tercatat!</span>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default VisitorCounter
