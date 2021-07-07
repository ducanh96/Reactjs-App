import {React,  useEffect,  useState } from 'react';
import { Link } from "react-router-dom";
const axios = require('axios');

const Posts = () => {
   const [posts, setPost] = useState([]);
   const [copyPosts, setCopyPosts] = useState(...posts);
   const [typeOrder, setTypeOrder] = useState("(None)");
   const [isLoading, setIsLoading] = useState(true);

   useEffect(()=> {
       axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response.data)
            setPost(response.data)
            setCopyPosts(response.data)
        });
        setIsLoading(false)

   }, [])

   const removePost = (id) => {
     setPost((olderListPost) => {
        setCopyPosts(olderListPost.filter(x => x.id != id));
        return olderListPost.filter(x => x.id != id);
     })
   }

   const lisPosts = posts.map((post) => {
       return (
          <tr>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td><button onClick={() => {
                  removePost(post.id)
              }}>Remove</button> 
               <Link to={`/posts/${post.id}`}>View detail</Link>
               </td>
          </tr>
       )
   })

   const searchPosts = (value) => {

      setPost((oldPosts) => {
          const termSearch = value.target.value;
          return copyPosts.filter(x => x.title.includes(termSearch));
      })
   }

   const orderPosts = () => {
       if(typeOrder.includes('None') || typeOrder.includes('DES')){
           setTypeOrder('ASC');
           setPost((oldPosts) => {
               return oldPosts.sort((a,b) => a.title.localeCompare(b.title))
           })
       } else if(typeOrder.includes('ASC'))
       {
            setTypeOrder('DES');
            setPost((oldPosts) => {
                return oldPosts.sort((a,b) => b.title.localeCompare(a.title))
            })
       }
   }
 
    return (
        <div>
            <input type="search" placeholder="Search by title" onChange={searchPosts}></input>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th onClick={orderPosts}>Title -- Sort {typeOrder}</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {lisPosts}
                </tbody>
            </table>
        </div>
    )
}
export default Posts;