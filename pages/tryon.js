import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TryOn = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            background: 'linear-gradient(to right, #7B1FA2, #1976D2)',
            color: 'white',
            padding: '20px',
            textAlign: 'center'
        }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px', textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)' }}>Virtual Try-On</h1>
            <p style={{ fontSize: '1.2rem', maxWidth: '600px', opacity: '0.9', marginBottom: '20px' }}>Experience how our products look on you before making a purchase!</p>
            
            <div style={{
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '15px',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)'
            }}>
                <Image src='/tryon-placeholder.jpg' alt='Try-On Preview' width={400} height={500} style={{ borderRadius: '15px' }} />
            </div>
            
            <div style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
                <button style={{
                    background: 'linear-gradient(to right, #E91E63, #D50000)',
                    color: 'white',
                    fontWeight: 'bold',
                    padding: '12px 24px',
                    borderRadius: '10px',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                    cursor: 'pointer',
                    border: 'none',
                    transition: 'transform 0.3s ease-in-out'
                }}
                onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}>
                    Upload Your Image
                </button>
                <Link href='/products'>
                    <button style={{
                        backgroundColor: '#212121',
                        color: 'white',
                        fontWeight: 'bold',
                        padding: '12px 24px',
                        borderRadius: '10px',
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                        cursor: 'pointer',
                        border: 'none',
                        transition: 'transform 0.3s ease-in-out'
                    }}
                    onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}>
                        Back to Shop
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default TryOn;
