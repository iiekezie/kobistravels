import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { siteInfo } from './content';

const TestimonialsBlock = () => (
  <div className="section" style={{marginTop:'3.5rem'}}>
    <h2 style={{textAlign:'center'}}>Testimonials</h2>
    <ul style={{listStyle:'none', padding:0, margin:'1.75rem 0 0', display:'grid', gap:'1.4rem', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))'}}>
      {siteInfo.testimonials?.map((t,i)=>(
        <li key={i} style={{background:'#fff', border:'1px solid #d9e3ec', padding:'1rem 1.1rem 1.15rem', borderRadius:14, boxShadow:'0 3px 8px -2px #0b254011'}}>
          <p style={{fontSize:'.9rem', lineHeight:1.5, margin:'0 0 .85rem', color:'#2e4659'}}>&ldquo;{t.text}&rdquo;</p>
          <div style={{fontSize:'.8rem', fontWeight:600, letterSpacing:.5}}>{t.name}</div>
        </li>
      ))}
    </ul>
  </div>
);

const Home = () => (
  <>
    <section className="hero container" style={{backgroundImage:'linear-gradient(rgba(0,70,155,.55),rgba(0,70,155,.55)), url(/hero-travel.jpg)', backgroundSize:'cover', backgroundPosition:'center', color:'#fff', borderRadius:32, boxShadow:'0 6px 22px -4px #003d7f55,0 4px 10px -2px #003d7f33', padding:'4.2rem 1.5rem 3.2rem'}}>
      <span className="badge" style={{background:'#fff', color:'#0057b8'}}>Travel & Study Guidance</span>
      <h1 style={{color:'#fff'}}>✈️ {siteInfo.name}</h1>
      <p className="lead" style={{color:'#eef6ff'}}>{siteInfo.tagline}</p>
      <p style={{maxWidth:820, margin:'0 auto', fontSize:'1.05rem', color:'#e1edf7'}}>{siteInfo.description}</p>
      <div style={{marginTop:'1.75rem'}}>
        <a href="/contact" className="btn" style={{background:'#ffd200', color:'#113355'}}>Start Your Plan</a>
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
        <a href="/contact" className="btn">Book a Consultation</a>
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
    <div style={{marginTop:'2.5rem'}} className="cta-banner">
      <h2>Need Guidance?</h2>
      <p>{siteInfo.cta}</p>
      <a href="/contact" className="btn">Contact Us</a>
    </div>
  </div>
);

const Contact = () => (
  <div className="container section">
    <h2>Contact</h2>
    <p>{siteInfo.cta}</p>
    <div className="contact-grid" style={{marginTop:'1.5rem'}}>
      <div className="contact-item"><div>📱</div><div><strong>Phone</strong>{siteInfo.contact.phone}</div></div>
      <div className="contact-item"><div>📧</div><div><strong>Email</strong>{siteInfo.contact.email}</div></div>
      <div className="contact-item"><div>📍</div><div><strong>Facebook</strong>{siteInfo.contact.facebook}</div></div>
      <div className="contact-item"><div>📸</div><div><strong>Instagram</strong>{siteInfo.contact.instagram}</div></div>
      <div className="contact-item"><div>🎵</div><div><strong>TikTok</strong>{siteInfo.contact.tiktok}</div></div>
      <div className="contact-item"><div>🕑</div><div><strong>Consultation Fee</strong>{siteInfo.consultationFee}</div></div>
    </div>
    <form onSubmit={(e)=>{e.preventDefault(); const f=e.target; const data=Object.fromEntries(new FormData(f).entries()); alert('Submitted (placeholder)'); f.reset();}} style={{marginTop:'2.5rem', background:'#fff', padding:'1.5rem 1.75rem 2rem', borderRadius:16, border:'1px solid #d9e3ec', boxShadow:'0 4px 12px -2px #0b254011'}}>
      <h3 style={{marginTop:0}}>Quick Inquiry</h3>
      <div style={{display:'grid', gap:'1rem', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))'}}>
        <label style={{fontSize:'.75rem', fontWeight:600, letterSpacing:.5, textTransform:'uppercase', display:'flex', flexDirection:'column', gap:'.4rem'}}>Name<input required name="name" style={inputStyle}/></label>
        <label style={{fontSize:'.75rem', fontWeight:600, letterSpacing:.5, textTransform:'uppercase', display:'flex', flexDirection:'column', gap:'.4rem'}}>Email<input required type="email" name="email" style={inputStyle}/></label>
        <label style={{fontSize:'.75rem', fontWeight:600, letterSpacing:.5, textTransform:'uppercase', display:'flex', flexDirection:'column', gap:'.4rem'}}>Phone<input name="phone" style={inputStyle}/></label>
      </div>
      <label style={{fontSize:'.75rem', fontWeight:600, letterSpacing:.5, textTransform:'uppercase', display:'flex', flexDirection:'column', gap:'.4rem', marginTop:'1rem'}}>Message<textarea required name="message" rows={5} style={{...inputStyle, resize:'vertical'}}/></label>
      <div style={{marginTop:'1.25rem'}}>
        <button type="submit" className="btn" style={{border:'none'}}>Send Inquiry</button>
      </div>
      <p style={{fontSize:'.7rem', color:'#5a758b', marginTop:'1rem'}}>This is a demo form. Integrate a service (EmailJS, Formspree, serverless function) for production email delivery.</p>
    </form>
  </div>
);

const inputStyle = {background:'#f5f9fc', border:'1px solid #c9d9e5', padding:'.7rem .85rem', borderRadius:10, font:'inherit', outline:'none'};

function Layout({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="site-header">
        <div className="container" style={{display:'flex', justifyContent:'space-between', alignItems:'center', gap:'1.25rem'}}>
            <NavLink to="/" className="brand" onClick={()=>setOpen(false)}>✈️ {siteInfo.name}</NavLink>
            <button aria-label="Toggle navigation" onClick={()=>setOpen(o=>!o)} style={{display:'none', background:'transparent', border:'1px solid #2e6fb2', color:'#fff', padding:'.55rem .65rem', borderRadius:8, fontSize:'.8rem'}} className="nav-toggle">{open ? 'Close' : 'Menu'}</button>
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
          .nav-toggle{display:inline-block;}
          .nav {flex-direction:column; position:absolute; top:64px; right:1rem; background:#0057b8; padding:1rem 1.1rem; border:1px solid #0d6ed1; border-radius:12px; box-shadow:0 6px 20px -4px #002f6d66; display:none; min-width:170px;}
          .nav[data-open="true"] {display:flex; animation:fadeIn .25s ease;}
          .nav a {width:100%;}
        }
        @keyframes fadeIn {from {opacity:0; transform:translateY(-4px);} to {opacity:1; transform:translateY(0);} }
      `}</style>
    </>
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
