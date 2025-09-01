import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { siteInfo } from './content';

const TestimonialsBlock = () => (
  <div className="section testimonials">
    <h2 className="text-center">Testimonials</h2>
    <ul className="testimonials-grid">
      {siteInfo.testimonials?.map((t,i)=>(
        <li key={i} className="testimonial">
          <p>&ldquo;{t.text}&rdquo;</p>
          <div className="name">{t.name}</div>
        </li>
      ))}
    </ul>
  </div>
);

const Home = () => (
  <>
    <section className="hero hero-img container" style={{backgroundImage:'url(/hero-travel.jpg)'}}>
      <span className="badge badge--light">Travel & Study Guidance</span>
      <h1>✈️ {siteInfo.name}</h1>
      <p className="lead" style={{color:'#eef6ff'}}>{siteInfo.tagline}</p>
      <p style={{maxWidth:820, margin:'0 auto', fontSize:'1.05rem', color:'#e1edf7'}}>{siteInfo.description}</p>
      <div className="mt-6">
        <a href="/contact" className="btn btn-accent">Start Your Plan</a>
      </div>
    </section>
    <section className="container section" id="services">
      <h2>Our Services</h2>
      <ul className="services-grid">
        {siteInfo.services.map((s,i)=>(
          <li key={i} className="service-card">
            <h3>🔹 {s.title}</h3>
            <p>{s.description}</p>
          </li>
        ))}
      </ul>
      <TestimonialsBlock />
    </section>
    <section className="container section">
      <div className="cta-banner">
        <h2>Your Journey Starts Here</h2>
        <p>{siteInfo.closing}</p>
        <a href="/contact" className="btn btn-primary">Book a Consultation</a>
      </div>
    </section>
  </>
);

const About = () => (
  <div className="container section">
    <h2>About Us</h2>
    <p style={{maxWidth:820}}>{siteInfo.description}</p>
    <p className="muted" style={{maxWidth:820}}>We provide mentorship, planning and execution support so you can focus on preparing for success. Our approach is collaborative, transparent and data‑informed.</p>
  </div>
);

const Services = () => (
  <div className="container section">
    <h2>Services</h2>
    <ul className="services-grid">
      {siteInfo.services.map((s,i)=>(
        <li key={i} className="service-card">
          <h3>🔹 {s.title}</h3>
          <p>{s.description}</p>
        </li>
      ))}
    </ul>
    <div className="cta-banner" style={{marginTop:'2.5rem'}}>
      <h2>Need Guidance?</h2>
      <p>{siteInfo.cta}</p>
      <a href="/contact" className="btn btn-accent">Contact Us</a>
    </div>
  </div>
);

const Contact = () => (
  <div className="container section">
    <h2>Contact</h2>
    <p>{siteInfo.cta}</p>
    <div className="contact-grid mt-6">
      <div className="contact-item"><div>📱</div><div><strong>Phone</strong>{siteInfo.contact.phone}</div></div>
      <div className="contact-item"><div>📧</div><div><strong>Email</strong>{siteInfo.contact.email}</div></div>
      <div className="contact-item"><div>📍</div><div><strong>Facebook</strong>{siteInfo.contact.facebook}</div></div>
      <div className="contact-item"><div>📸</div><div><strong>Instagram</strong>{siteInfo.contact.instagram}</div></div>
      <div className="contact-item"><div>🎵</div><div><strong>TikTok</strong>{siteInfo.contact.tiktok}</div></div>
      <div className="contact-item"><div>🕑</div><div><strong>Consultation Fee</strong>{siteInfo.consultationFee}</div></div>
    </div>
    <form onSubmit={(e)=>{e.preventDefault(); alert('Submitted (placeholder)'); e.target.reset();}} className="form-panel mt-8">
      <h3 className="mt-0">Quick Inquiry</h3>
      <div className="form-grid">
        <label className="form-label">Name<input required name="name" className="input"/></label>
        <label className="form-label">Email<input required type="email" name="email" className="input"/></label>
        <label className="form-label">Phone<input name="phone" className="input"/></label>
      </div>
      <label className="form-label mt-6">Message<textarea required name="message" rows={5} className="input" style={{resize:'vertical'}}/></label>
      <div className="mt-6">
        <button type="submit" className="btn btn-primary">Send Inquiry</button>
      </div>
      <p style={{fontSize:'.7rem', color:'var(--color-text-muted)', marginTop:'1rem'}}>This is a demo form. Integrate a service (EmailJS, Formspree, serverless function) for production email delivery.</p>
    </form>
  </div>
);

// Removed inline style objects in favor of CSS classes

function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);
  return (
    <div className={light ? 'theme-light' : ''}>
      <header className="site-header">
        <div className="container" style={{display:'flex', justifyContent:'space-between', alignItems:'center', gap:'1.25rem'}}>
            <NavLink to="/" className="brand" onClick={()=>setOpen(false)}>✈️ {siteInfo.name}</NavLink>
            <div style={{display:'flex', alignItems:'center', gap:'.75rem'}}>
              <button className="theme-toggle" onClick={()=>setLight(l=>!l)}>{light ? 'Dark' : 'Light'} Mode</button>
              <button aria-label="Toggle navigation" onClick={()=>setOpen(o=>!o)} style={{display:'none'}} className="nav-toggle">{open ? 'Close' : 'Menu'}</button>
            </div>
            <nav className="nav" data-open={open}>
              <NavLink to="/" end onClick={()=>setOpen(false)}>Home</NavLink>
              <NavLink to="/about" onClick={()=>setOpen(false)}>About</NavLink>
              <NavLink to="/services" onClick={()=>setOpen(false)}>Services</NavLink>
              <NavLink to="/contact" onClick={()=>setOpen(false)}>Contact</NavLink>
            </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer>
        <div className="container" style={{display:'flex', flexDirection:'column', gap:'1.25rem'}}>
          <div style={{display:'flex', flexWrap:'wrap', gap:'2.5rem'}}>
            <div style={{flex:'1 1 260px'}}>
              <h3 style={{margin:'0 0 .75rem', color:'#fff', fontSize:'1.05rem'}}>About</h3>
              <p style={{margin:0, maxWidth:460, color:'#b9c9d8', fontSize:'.85rem'}}>{siteInfo.tagline}</p>
            </div>
            <div style={{flex:'1 1 160px'}}>
              <h3 style={{margin:'0 0 .75rem', color:'#fff', fontSize:'1.05rem'}}>Contact</h3>
              <ul style={{listStyle:'none', padding:0, margin:0, fontSize:'.8rem', lineHeight:1.65}}>
                <li>Phone: {siteInfo.contact.phone}</li>
                <li>Email: {siteInfo.contact.email}</li>
                <li>Instagram: {siteInfo.contact.instagram}</li>
              </ul>
            </div>
          </div>
          <div style={{textAlign:'center', fontSize:'.75rem', opacity:.75}}>&copy; {new Date().getFullYear()} {siteInfo.name}. All rights reserved.</div>
        </div>
      </footer>
      <style>{`
        @media (max-width: 840px){
          .nav-toggle{display:inline-block; background:transparent; border:1px solid #2e6fb2; color:#fff; padding:.55rem .65rem; border-radius:8px; font-size:.8rem;}
          .nav {flex-direction:column; position:absolute; top:64px; right:1rem; background:var(--color-primary); padding:1rem 1.1rem; border:1px solid var(--color-primary-dark); border-radius:12px; box-shadow:0 6px 20px -4px #002f6d66; display:none; min-width:170px;}
          .nav[data-open="true"] {display:flex; animation:fadeIn .25s ease;}
          .nav a {width:100%;}
        }
        @keyframes fadeIn {from {opacity:0; transform:translateY(-4px);} to {opacity:1; transform:translateY(0);} }
      `}</style>
    </div>
  );
}

export default function App(){
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
