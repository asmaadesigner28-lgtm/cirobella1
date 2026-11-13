import React, { useState } from 'react';
import './index.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [activeCategory, setActiveCategory] = useState('all');

  const productsData = [
    { id: 1, name: "serums", category: "serums", price: "350 ج.م",img: "serum.jpg" , desc: "تركيبة فائقة الخفة تعيد للموجات طبيعتها وتمنح الشعر لمعاناً وانسيابية.",  },
    { id: 2, name: "Body lotions", category: "lotions", price: "280 ج.م",img:"body cream.jpg", desc: "ترطيب عميق وأحماض دهنية مخصصة لترطيب عالي ونعومة للجسم ." },
    { id: 3, name: "formula", category: "formula", price: "1500 ج.م",img: "formula.jpg", desc: "تصنيع وتطوير تركيبات كيميائية وطبيعية للمشاريع والبراندات." },
  ];

  const filteredProducts = activeCategory === 'all' 
    ? productsData 
    : productsData.filter(p => p.category === activeCategory);

  const scrollToAbout = () => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="cirobella-app" style={{ backgroundColor: '#fcf8fa', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      
      {/* الهيدر */}
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 48px',
        height: '80px',
        position: 'sticky',
        top: 0,
        backgroundColor: '#fff',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
        zIndex: 1000
      }}>
        <a href="tel:+2001287749428" style={{
          backgroundColor: '#93114C',
          color: '#fff',
          border: 'none',
          padding: '10px 24px',
          borderRadius: '30px',
          cursor: 'pointer',
          fontWeight: 'bold',
          textDecoration: 'none',
          fontSize: '14px'
        }}>
          تواصل معنا: 01287749428 📞
        </a>

        <nav style={{ display: 'flex', gap: '24px', cursor: 'pointer', fontWeight: 'bold', color: '#444' }}>
          <span onClick={() => setCurrentPage('home')}>الرئيسية</span>
          <span onClick={() => { setCurrentPage('home'); setTimeout(() => document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>المنتجات</span>
          <span onClick={scrollToAbout}>عن الماركة</span>
          <span onClick={() => setCurrentPage('consultations')} style={{ color: '#93114C' }}>قسم الاستشارات</span>
        </nav>

        <div className="logo" onClick={() => setCurrentPage('home')} style={{ fontWeight: 'bold', fontSize: '24px', color: '#93114C', cursor: 'pointer' }}>
          CiroBella
        </div>
      </header>

      {currentPage === 'home' ? (
        <>
          {/* قسم الهيرو بانر */}
          <section style={{
            width: '100%',
            padding: '40px 20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            <img 
              src="/hero banner.png" 
              alt="CiroBella Hero Banner" 
              style={{
                width: '100%',
                maxWidth: '1300px',
                height: 'auto',
                maxHeight: '650px',
                objectFit: 'cover',
                borderRadius: '16px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                marginBottom: '30px'
              }}
            />

            <div style={{ maxWidth: '800px' }}>
              <span style={{ 
                backgroundColor: '#d4af37', 
                color: '#000', 
                padding: '6px 16px',
                borderRadius: '4px', 
                fontSize: '14px', 
                fontWeight: 'bold' 
              }}>
                منتج الشهر المميز
              </span>
              <h1 style={{ fontSize: '42px', fontWeight: '800', margin: '20px 0', color: '#2b0b1a' }}>
                علاج وانسيابية الشعر مع CiroBella
              </h1>
              <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '30px', color: '#555' }}>
                سيروم مغذي ومكمل طبيعي يمنح شعرك الحيوية والمرونة مع كل حركة.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
                <button onClick={() => setCurrentPage('consultations')} style={{
                  backgroundColor: '#93114C',
                  color: '#fff',
                  border: 'none',
                  padding: '14px 32px',
                  borderRadius: '30px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}>
                  احصلي عليه الآن
                </button>
                <button onClick={scrollToAbout} style={{
                  backgroundColor: 'transparent',
                  color: '#93114C',
                  border: '2px solid #93114C',
                  padding: '14px 32px',
                  borderRadius: '30px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}>
                  شاهد الفوائد
                </button>
              </div>
            </div>
          </section>

          {/* قسم عن CiroBella */}
          <section id="about-section" style={{ padding: '60px 48px', backgroundColor: '#fff', textAlign: 'center', marginTop: '40px' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <span style={{ color: '#93114C', fontWeight: 'bold', fontSize: '14px', letterSpacing: '1px' }}>
                علامة تجميلية بلمسة علمية مصرية 🇪🇬
              </span>
              <h2 style={{ fontSize: '36px', color: '#2b0b1a', margin: '16px 0 24px 0', fontWeight: '800' }}>
                عن CiroBella
              </h2>
              <p style={{ fontSize: '18px', lineHeight: '1.9', color: '#555', marginBottom: '20px' }}>
                <strong>CiroBella</strong> هي علامة تجارية مصرية رائدة متخصصة في ابتكار وتصنيع حلول العناية بالبشرة والشعر برؤية تجمع بين <strong>التجميل والعلاج الكيميائي المدروس</strong>.
              </p>
              <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#666' }}>
                نضمن لكِ أعلى معايير الجودة والتخصص من خلال فورمولات ناتجة عن دراسات واستشارات كيميائية دقيقة، نستخدم فيها أنقى الزيوت والمستخلصات المعالجة لتقديم نتائج حقيقية وانسيابية ملموسة.
              </p>
            </div>
          </section>

          {/* قسم المنتجات */}
          <section id="products-section" style={{ padding: '70px 48px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '32px', color: '#93114C', marginBottom: '10px' }}>منتجاتنا المتميزة</h2>
            <p style={{ color: '#666', marginBottom: '35px' }}>مرري الماوس على المنتجات لتجربة العرض المجسم</p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '45px', flexWrap: 'wrap' }}>
              {[
                { id: 'all', label: 'الكل' },
                { id: 'serums', label: 'سيرمات الشعر' },
                { id: 'masks', label: 'حمام الكريم' },
                { id: 'formula', label: 'تصنيع وتطوير تركيبات ' }
              ].map(cat => (
                <button 
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    padding: '12px 28px',
                    borderRadius: '30px',
                    border: '2px solid #93114C',
                    backgroundColor: activeCategory === cat.id ? '#93114C' : 'transparent',
                    color: activeCategory === cat.id ? '#fff' : '#93114C',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    transition: 'all 0.3s ease'
                  }}>
                  {cat.label}
                </button>
              ))}
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '35px',
              maxWidth: '1200px',
              margin: '0 auto',
              perspective: '1000px'
            }}>
              {filteredProducts.map(product => (
                <div 
                  key={product.id} 
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: '20px',
                    padding: '24px',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.06)',
                    textAlign: 'right',
                    transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease',
                    cursor: 'pointer',
                    transformStyle: 'preserve-3d'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-12px) rotateX(4deg) rotateY(-2deg) scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 20px 35px rgba(147, 17, 76, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) rotateX(0) rotateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.06)';
                  }}
                >
                  <div style={{
  width: '100%',
  height: '220px',
  borderRadius: '14px',
  marginBottom: '20px',
  overflow: 'hidden' // عشان الصورة تلتزم بحواف الكارت المنحنية
}}>
  <img 
    src={product.img} 
    alt={product.name} 
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover' // عشان الصورة تملأ المكان بضبط وبدون مط
    }} 
  />
</div>
                  <h3 style={{ fontSize: '20px', color: '#2b0b1a', marginBottom: '10px' }}>{product.name}</h3>
                  <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6', marginBottom: '20px', minHeight: '45px' }}>{product.desc}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '20px', color: '#93114C' }}>{product.price}</span>
                    <button style={{
                      backgroundColor: '#93114C',
                      color: '#fff',
                      border: 'none',
                      padding: '10px 20px',
                      borderRadius: '25px',
                      cursor: 'pointer',
                      fontWeight: 'bold'
                    }}>أضفي للسلة 🛒</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      ) : (
        /* صفحة الاستشارات الكيميائية المستقلة */
        <section style={{ padding: '60px 20px', maxWidth: '800px', margin: '0 auto', textAlign: 'right' }}>
          <h1 style={{ color: '#93114C', textAlign: 'center', marginBottom: '15px' }}>مركز الاستشارات الكيميائية والتجميلية</h1>
          <p style={{ textAlign: 'center', color: '#555', marginBottom: '40px', fontSize: '16px' }}>
            تواصل مباشر مع خبراء CiroBella للتركيبات والعناية المتخصصة.
          </p>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '20px', backgroundColor: '#fff', padding: '35px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>الاسم بالكامل</label>
              <input type="text" placeholder="اكتبي اسمك هنا" style={{ width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid #ddd' }} />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>رقم الموبايل / الواتساب</label>
              <input type="tel" placeholder="+20 01287749428" style={{ width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid #ddd', direction: 'ltr', textAlign: 'right' }} />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>نوع الاستشارة المطلوبة</label>
              <select style={{ width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid #ddd' }}>
                <option>استشارة علاج وتنعيم الشعر التالف</option>
                <option>تحديد الروتين المناسب لطبيعة الشعر/البشرة</option>
                <option>استشارة كيميائية مخصصة للتركيبات والتصنيع</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>تفاصيل الاستفسار</label>
              <textarea rows="4" placeholder="اشرحي لنا حالة شعركِ أو استفسارك بالتفصيل..." style={{ width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid #ddd' }}></textarea>
            </div>

            <button type="button" style={{
              backgroundColor: '#93114C',
              color: '#fff',
              padding: '16px',
              border: 'none',
              borderRadius: '30px',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '16px',
              marginTop: '10px'
            }}>
              حجز موعد استشارة
            </button>
          </form>

          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <button onClick={() => setCurrentPage('home')} style={{ background: 'none', border: 'none', color: '#666', cursor: 'pointer', textDecoration: 'underline', fontSize: '16px', fontWeight: 'bold' }}>
              ← العودة للصفحة الرئيسية والبانر
            </button>
          </div>
        </section>
      )}

      {/* الفوتر */}
      <footer style={{ backgroundColor: '#2b0b1a', color: '#fff', padding: '30px 48px', marginTop: '60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span>CiroBella Cosmetics 2026 © جميع الحقوق محفوظة</span>
        <span>تواصل مباشر: 01287749428</span>
      </footer>

    </div>
  );
}