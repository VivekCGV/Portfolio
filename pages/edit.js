import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Button from "../components/Button";
import data from "../data/portfolio.json";

const Edit = () => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [jsonText, setJsonText] = useState(JSON.stringify(data, null, 2));
  const [status, setStatus] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  const savePortfolio = async () => {
    setStatus("");

    try {
      const parsed = JSON.parse(jsonText);
      const response = await fetch("/api/portfolio", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(parsed),
      });

      if (!response.ok) {
        throw new Error("Unable to save portfolio data.");
      }

      setStatus("Saved. Refresh the home and resume pages to see updates.");
    } catch (error) {
      setStatus(error.message || "Invalid JSON.");
    }
  };

  return (
    <>
      <Head>
        <title>Edit Portfolio</title>
      </Head>
      <div className="container mx-auto py-10 px-4">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">Edit Portfolio</h1>
            <p className="mt-2 text-sm opacity-70 max-w-2xl">
              Dev-only JSON editor for the portfolio data consumed by the home and resume pages.
            </p>
          </div>
          <div className="flex items-center">
            <Button onClick={() => router.push("/")}>Home</Button>
            <Button onClick={() => router.push("/resume")}>Resume</Button>
          </div>
        </div>

        {mounted && (
          <div className="mt-8 rounded-3xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-zinc-950/90 backdrop-blur-sm shadow-2xl p-4 tablet:p-6">
            <textarea
              value={jsonText}
              onChange={(event) => setJsonText(event.target.value)}
              className="min-h-[70vh] w-full rounded-2xl border border-black/10 dark:border-white/10 bg-transparent p-4 font-mono text-sm leading-6 outline-none text-gray-900 dark:text-gray-100"
              spellCheck="false"
            />
            <div className="mt-4 flex items-center justify-between gap-4 flex-wrap">
              <p className="text-sm opacity-70">{status}</p>
              <div className="flex items-center">
                <Button type="primary" onClick={savePortfolio}>
                  Save Changes
                </Button>
                <Button onClick={() => router.back()}>Back</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Edit;