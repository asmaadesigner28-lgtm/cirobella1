import React from 'react';
import heroImg from '../assets/hero banner.png';

export default function Hero() {
  return (
    <section style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '60px 48px',
      background: 'linear-gradient(135deg, var(--dark-bg), var(--primary))',
      color: '#fff',
      minHeight: '80vh'
      
    }}>
      <div style={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
        <img 
          src={heroImg} 
          alt="CiroBella Hero" 
          className="hero-img"
        />
      </div>

      <div style={{ maxWidth: '600px', textAlign: 'right' }}>
        <span style={{ 
          backgroundColor: 'var(--gold)', 
          color: '#000', 
          padding: '4px 12px', 
          borderRadius: '4px', 
          fontSize: '14px', 
          fontWeight: 'bold' 
        }}>
          منتج الشهر المميز
        </span>
        <h1 style={{ fontSize: '42px', fontWeight: '800', margin: '20px 0' }}>
          علاج وانسيابية الشعر مع CiroBella
        </h1>
        <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '30px' }}>
          سيروم مغذي ومكمل طبيعي يمنح شعرك الحيوية والمرونة مع كل حركة.
        </p>
        <div style={{ display: 'flex', gap: '16px' }}>
          <button style={{
            backgroundColor: 'transparent',
            color: '#fff',
            border: '2px solid var(--primary)',
            padding: '14px 32px',
            borderRadius: '30px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}>
            شاهد الفوائد
          </button>
          <button style={{
            backgroundColor: 'var(--primary)',
            color: '#fff',
            border: '2px solid #fff',
            padding: '14px 32px',
            borderRadius: '30px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}>
            احصلي عليه الآن
          </button>
        </div>
      </div>
    </section>
  );
}