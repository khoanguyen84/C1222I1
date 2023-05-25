function renderPosts() {
    $.ajax({
        url: 'https://js-post-api.herokuapp.com/api/posts?_limit=10',
        method: "GET",
        success: function (posts) {
            let htmls = posts.data.map(function (post, index) {
                return `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${post.author}</td>
                        <td>${post.title}</td>
                        <td>${post.description}</td>
                        <td>
                            <img class='w-50' src=${post.imageUrl} alt=''/>
                        </td>
                        <td>${new Date(post.createdAt)}</td>
                        <td>
                            <button class='btn btn-primary btn-sm' onclick='getPostDetail("${post.id}")'><i class='fa fa-eye'></i> </button>
                        </td>
                    </tr>
                `
            })
            document.getElementById('tbPosts').innerHTML = htmls.join('')
        }
    })
}

function openCreateModal(){
    $('#post-modal').modal('show')
}

function getPostDetail(postId){
    $.ajax({
        url: `https://js-post-api.herokuapp.com/api/posts/${postId}`,
        method: 'get',
        success: function(post){
            $('#post-photo').attr("src",post.imageUrl)
            $('#post-title').append(post.title);
            $('#post-desc').text(post.description);
            $('#post-author').text(post.author);
            $('#post-created-date').text((new Date(post.createdAt)).toLocaleString());

            $('#post-detail-modal').modal('show')
        }
    })
    
    
}
renderPosts();