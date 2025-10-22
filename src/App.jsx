import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BlogsPage from "./pages/BlogsPage";
import ProjectsPage from "./pages/ProjectsPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import NotFound from "./pages/NotFound";
import Loader from "./components/Loader";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <AnimatePresence mode="wait">
         {loading ? (
             <Loader key="loader" />
           ) : (
        <BrowserRouter key="content">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/blog/:id" element={<BlogDetailPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
          )}
        </AnimatePresence>
      </TooltipProvider>
    </QueryClientProvider>
  )
};

export default App;





// import { useState, useEffect } from "react";
// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";
// import Index from "./pages/Index";
// import BlogsPage from "./pages/BlogsPage";
// import ProjectsPage from "./pages/ProjectsPage";
// import BlogDetailPage from "./pages/BlogDetailPage";
// import NotFound from "./pages/NotFound";
// import Loader from "./components/Loader";

// const queryClient = new QueryClient();

// const App = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 1500);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <QueryClientProvider client={queryClient}>
//       <TooltipProvider>
//         <Toaster />
//         <Sonner />
//         <AnimatePresence mode="wait">
//           {loading ? (
//             <Loader key="loader" />
//           ) : (
//             <BrowserRouter key="content">
//               <Routes>
//                 <Route path="/" element={<Index />} />
//                 <Route path="/blogs" element={<BlogsPage />} />
//                 <Route path="/projects" element={<ProjectsPage />} />
//                 <Route path="/blog/:id" element={<BlogDetailPage />} />
//                 {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
//                 <Route path="*" element={<NotFound />} />
//               </Routes>
//             </BrowserRouter>
//           )}
//         </AnimatePresence>
//       </TooltipProvider>
//     </QueryClientProvider>
//   );
// };

// export default App;
