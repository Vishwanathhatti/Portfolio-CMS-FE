import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Button
        variant="ghost"
        onClick={() => navigate(-1)}
        className="mb-8"
      >
        <ArrowLeft className="mr-2 w-4 h-4" />
        Back
      </Button>
    </motion.div>
  );
};

export default BackButton;
