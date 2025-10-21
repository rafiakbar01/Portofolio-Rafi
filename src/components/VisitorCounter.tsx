import { useEffect, useState } from "react";
import { Eye, Calendar, TrendingUp, Users } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

interface VisitorStats {
  totalVisitors: number;
  dailyVisitors: number;
  lastVisitDate: string;
}

const VisitorCounter = () => {
  const [stats, setStats] = useState<VisitorStats>({
    totalVisitors: 0,
    dailyVisitors: 0,
    lastVisitDate: "",
  });
  const [isNewVisitor, setIsNewVisitor] = useState(false);

  // ✅ Tambahkan data visitor ke database Supabase
  const addVisitor = async () => {
    const today = new Date().toISOString().split("T")[0];

    // Simpan di localStorage biar gak hitung double dari browser yang sama
    const lastVisit = localStorage.getItem("last-visit-date");
    if (lastVisit === today) return;

    await supabase.from("visitors").insert([{ ip_address: "anonymous" }]);
    localStorage.setItem("last-visit-date", today);
    setIsNewVisitor(true);
  };

  // ✅ Ambil data awal dari Supabase
  const fetchStats = async () => {
    const today = new Date().toISOString().split("T")[0];

    const { count: total } = await supabase
      .from("visitors")
      .select("*", { count: "exact", head: true });

    const { count: todayCount } = await supabase
      .from("visitors")
      .select("*", { count: "exact", head: true })
      .gte("created_at", `${today}T00:00:00`)
      .lte("created_at", `${today}T23:59:59`);

    setStats({
      totalVisitors: total || 0,
      dailyVisitors: todayCount || 0,
      lastVisitDate: today,
    });
  };

  useEffect(() => {
    addVisitor();
    fetchStats();

    // ✅ Realtime listener
    const channel = supabase
      .channel("visitor-changes")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "visitors" },
        (payload) => {
          setStats((prev) => ({
            ...prev,
            totalVisitors: prev.totalVisitors + 1,
            dailyVisitors:
              new Date(payload.new.created_at).toDateString() ===
              new Date().toDateString()
                ? prev.dailyVisitors + 1
                : prev.dailyVisitors,
          }));
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <section className="py-16 bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto max-w-5xl px-6">
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="flex justify-center items-center gap-2 mb-2">
            <Eye className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold text-gray-800">
              Visitor
            </h2>
          </div>
          <p className="text-sm text-gray-600">
            Statistik pengunjung portofolio ini (realtime)
          </p>
        </div>

        {/* Grid Statistik */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Total Visitors */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
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

          {/* Daily Visitors */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
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
        </div>

        {/* Notifikasi Kunjungan Baru */}
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
  );
};

export default VisitorCounter;
