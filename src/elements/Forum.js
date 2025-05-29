import React, { useState } from 'react';
import '../styles/Forum.css';

// Dados simulados iniciais
const initialPosts = [
  {
    id: 1,
    author: 'Lucas Silva',
    avatar: 'https://i.pravatar.cc/50?img=12',
    category: 'Dúvidas',
    content: 'Alguém pode explicar a diferença entre função e método?',
    likes: 3,
  },
  {
    id: 2,
    author: 'Maria Oliveira',
    avatar: 'https://i.pravatar.cc/50?img=32',
    category: 'Avisos',
    content: 'Prazo de entrega do trabalho prorrogado para sexta-feira!',
    likes: 7,
  },
  {
    id: 3,
    author: 'Clara Almeida',
    avatar: 'https://i.pravatar.cc/50?img=45',
    category: 'Estudos',
    content: 'Recomendo o livro “Clean Code” para aprender boas práticas.',
    likes: 5,
  },
];

// Categorias disponíveis
const categories = ['Todos', 'Dúvidas', 'Avisos', 'Estudos'];

const Forum = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [newPost, setNewPost] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  // Curtir post
  const handleLike = (id) => {
    setPosts(posts.map(post =>
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  // Criar novo post
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newPost.trim()) return;

    const post = {
      id: posts.length + 1,
      author: 'Você',
      avatar: './img/gigachad.jpg',
      category: 'Dúvidas',
      content: newPost,
      likes: 0,
    };

    setPosts([post, ...posts]);
    setNewPost('');
  };

  // Filtrar posts por categoria e busca
  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;
    const matchesSearch = post.content.toLowerCase().includes(searchTerm.toLowerCase()) || post.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="forum-section">
      <div className="left-card">
        <img 
          src="/img/Pessoasconversando.jpg" 
          alt="Alunos apontando para o fórum" 
          className="students-image" 
        />
        <h2>Bem-vindo ao Fórum da Faculdade!</h2>
        <p>Aqui você pode tirar dúvidas, trocar informações e se manter atualizado com avisos e dicas de estudo.</p>
      </div>

      <div className="right-content">
        <header className="forum-header">
          <h1>Fórum</h1>
          <div className="filters">
            <select 
              value={selectedCategory} 
              onChange={e => setSelectedCategory(e.target.value)}
              aria-label="Filtrar por categoria"
            >
              {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>

            <input 
              type="search" 
              placeholder="Buscar por autor ou conteúdo..." 
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              aria-label="Buscar no fórum"
            />
          </div>
        </header>

        <form onSubmit={handleSubmit} className="new-post-form">
          <textarea 
            placeholder="Escreva sua dúvida, aviso ou dica..." 
            value={newPost}
            onChange={e => setNewPost(e.target.value)}
            rows={3}
            aria-label="Novo post"
          />
          <button type="submit" className="btn-submit">Enviar</button>
        </form>

        <ul className="posts-list">
          {filteredPosts.length === 0 && <p className="no-posts">Nenhum post encontrado.</p>}

          {filteredPosts.map(post => (
            <li key={post.id} className="post-item">
              <div className="post-header">
                <img src={post.avatar} alt={`${post.author} avatar`} className="avatar" />
                <strong>{post.author}</strong>
                <span className="category-tag">{post.category}</span>
              </div>
              <p className="post-content">{post.content}</p>
              <button className="like-btn" onClick={() => handleLike(post.id)}>
                ❤️ {post.likes}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Forum;
