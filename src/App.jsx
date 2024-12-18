import './CSS/App.css';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from './Components/Outlet';
import Homepage from './Pages/Homepage';
import Aboutus from './Pages/Aboutus';
import Clinic from './Pages/Clinic';
import Getinvolved from './Pages/Getinvolved';
import Contact from './Pages/Contact';
import Media from './Pages/Media';
import Programmes from './Pages/Programmes';
import CardDetails from './Pages/CardDetails'; // Import the new CardDetails page
import PrivacyPolicy from './Pages/footer_components/PrivacyPolicy'
import TermsCondotions from './Pages/footer_components/TermsCondotions'
import RefundPolicy from './Pages/footer_components/RefundPolicy'
import PoshPolicy from './Pages/footer_components/PoshPolicy'
import ChildProtection from './Pages/footer_components/ChildProtection'


        
        

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route 
          path='' 
          element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}><Homepage /></motion.div>} 
        />
        <Route 
          path='About' 
          element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}><Aboutus /></motion.div>} 
        />
        <Route 
          path='Clinic' 
          element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}><Clinic /></motion.div>} 
        />
        <Route 
          path='GetInvolved' 
          element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}><Getinvolved /></motion.div>} 
        />
        <Route 
          path='Contact' 
          element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}><Contact /></motion.div>} 
        />
        <Route 
          path='Media' 
          element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}><Media /></motion.div>} 
        />
        <Route 
          path='programmes' 
          element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}><Programmes /></motion.div>} 
        />
        {/* Dynamic Route for Card Details */}
        <Route 
          path='donate/:id' 
          element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}><CardDetails /></motion.div>} 
        />
        <Route 
          path='PrivacyPolicy' 
          element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}><PrivacyPolicy /></motion.div>} 
          
        />
        <Route 
          path='TermsCondotions' 
          element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}><TermsCondotions /></motion.div>} 
          
        />
        <Route 
          path='RefundPolicy' 
          element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}><RefundPolicy /></motion.div>} 
          
        />
        <Route 
          path='PoshPolicy' 
          element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}><PoshPolicy /></motion.div>} 
          
        />
        
        <Route 
          path='ChildProtection' 
          element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}><ChildProtection /></motion.div>} 
          
        />
        
        
      </Route>
    </Routes>
  );
}

export default App;
