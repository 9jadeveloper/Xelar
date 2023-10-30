import Random from "../Components/Random";
import Veggie from "../Components/Veggie";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div>
      <Random />
      <Veggie />
    </motion.div>
  );
};

export default Home;
