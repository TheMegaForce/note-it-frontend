import { Outlet, useLocation } from "react-router-dom"
import './App.css';
import './lookGood.css';
import { motion } from "framer-motion";

function App() {
  const { pathname } = useLocation();
  const pageVariants = {
    initial: {
      opacity: 0
    },
    in: {
      opacity: 1
    },
    out: {
      opacity: 0
    }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'linear',
    duration: 0.5
  }; 

  return (
    <div className="App">
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Outlet />
      </motion.div>
    </div>
  );
}

export default App;
