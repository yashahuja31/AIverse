import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="flex min-h-[80vh] items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-6xl font-bold tracking-tight">
            AIverse
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            One Platform. Every AI Tool You&apos;ll Ever Need.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}