/* 
pt-br
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor 'Augusto Cury'
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
en-us
    ∞ Fetching and counting data in Arrays ∞
      Based on the Array of Books by Category below, take the following challenges
          • Count the number of categories and the number of books in each category
          • Count the number of authors
          • Show books by author 'Augusto Cury'
          • Transform a function above into a function that will take the author's name and return that author's books.
*/

const booksByCategory = [
  {
    category: 'Riqueza',
    books: [
      {
        title: 'Os segredos da mente milionária',
        author: 'T. Harv Eker'
      },
      {
        title: 'O homem mais rico da Babilônia',
        author: 'George S. Clason'
      },
      {
        title: 'Pai rico, pai pobre',
        author: 'Robert T. Kiyosaki e Sharon L. Lechter'
      }
    ]
  },
  {
    category: 'Inteligência Emocional',
    books: [
      {
        title: 'Você é Insubstituível',
        author: 'Augusto Cury'
      },
      {
        title: 'Ansiedade – Como enfrentar o mal do século',
        author: 'Augusto Cury'
      },
      {
        title: 'Os 7 hábitos das pessoas altamente eficazes',
        author: 'Stephen R. Covey'
      }
    ]
  }
]

function countBookInEachCategory() {
  console.log('Total de categorias encontradas = ' + booksByCategory.length)
  console.log(
    'Livros na categoria ' +
      booksByCategory[0].category +
      ' = ' +
      booksByCategory[0].books.length
  )
  console.log(
    'Livros na categoria ' +
      booksByCategory[1].category +
      ' = ' +
      booksByCategory[1].books.length
  )
}

countBookInEachCategory(booksByCategory)

function countAuthors() {
  let authors = []
  for (category of booksByCategory) {
    for (book of category.books) {
      if (authors.indexOf(book.author) == -1) {
        authors.push(book.author)
      }
    }
  }
  console.log(`o número total de autores encontrados é: ${authors.length}`)
}

countAuthors()

function findBooksOfAuthor(authorName) {
  let books = []
  for (category of booksByCategory) {
    for (book of category.books) {
      if (book.author === authorName) {
        books.push(book.title)
      }
    }
  }
  console.log(books)
}

findBooksOfAuthor('Augusto Cury')
