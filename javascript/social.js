document.addEventListener('DOMContentLoaded', function() {
    // 獲取DOM元素
    const avatarUpload = document.getElementById('avatar-upload');
    const avatarImg = document.querySelector('.user-info .avatar');
    const nicknameInput = document.querySelector('.user-info input[type="text"]');
    const postTextarea = document.querySelector('.post-form textarea');
    const uploadPhotoBtn = document.querySelector('.upload-photo');
    const locationTagBtn = document.querySelector('.location-tag');
    const postSubmitBtn = document.querySelector('.post-submit');
    const postsFeed = document.querySelector('.posts-feed');

    // 全局變量
    let selectedLocation = '';
    let postImage = null;

    // 修改頭像上傳功能
    avatarUpload.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const avatarBase64 = e.target.result;
                avatarImg.src = avatarBase64;
                // 如果有暱稱，就保存頭像
                const username = nicknameInput.value.trim();
                if (username) {
                    window.dataService.saveAvatar(username, avatarBase64);
                }
            };
            reader.readAsDataURL(file);
        }
    });

    // 貼文照片上傳功能
    const photoInput = document.createElement('input');
    photoInput.type = 'file';
    photoInput.accept = 'image/*';
    
    uploadPhotoBtn.addEventListener('click', () => {
        photoInput.click();
    });

    photoInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            postImage = file;
            uploadPhotoBtn.style.backgroundColor = '#ff4d4d';
            uploadPhotoBtn.style.color = 'white';
        }
    });

    // 夜市位置標記功能
    const nightMarkets = [
        '饒河街夜市', '師大夜市', '士林夜市', '寧夏夜市',
        '華西街夜市', '臨江街夜市', '逢甲夜市', '六合夜市'
    ];

    locationTagBtn.addEventListener('click', function() {
        const locationList = document.createElement('div');
        locationList.className = 'location-list';
        locationList.style.position = 'absolute';
        locationList.style.backgroundColor = 'white';
        locationList.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        locationList.style.borderRadius = '5px';
        locationList.style.padding = '10px';
        locationList.style.maxHeight = '200px';
        locationList.style.overflowY = 'auto';

        nightMarkets.forEach(market => {
            const item = document.createElement('div');
            item.textContent = market;
            item.style.padding = '5px 10px';
            item.style.cursor = 'pointer';
            item.addEventListener('mouseover', () => {
                item.style.backgroundColor = '#f0f0f0';
            });
            item.addEventListener('mouseout', () => {
                item.style.backgroundColor = 'white';
            });
            item.addEventListener('click', () => {
                selectedLocation = market;
                locationTagBtn.style.backgroundColor = '#ff4d4d';
                locationTagBtn.style.color = 'white';
                locationList.remove();
            });
            locationList.appendChild(item);
        });

        document.querySelector('.post-actions').appendChild(locationList);
    });

    // 修改發布貼文功能
    postSubmitBtn.addEventListener('click', function() {
        const username = nicknameInput.value.trim();
        const content = postTextarea.value.trim();

        if (!username) {
            alert('請輸入暱稱！');
            return;
        }
        if (!content) {
            alert('請輸入貼文內容！');
            return;
        }

        // 將圖片轉換為 base64 字符串
        if (postImage) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const imageBase64 = e.target.result;
                
                const post = window.dataService.addPost({
                    content: content,
                    username: username,
                    location: selectedLocation || '饒河街夜市',
                    imageUrl: imageBase64,
                    avatarUrl: avatarImg.src
                });

                createNewPost(post);
                resetForm();
            };
            reader.readAsDataURL(postImage);
        } else {
            const post = window.dataService.addPost({
                content: content,
                username: username,
                location: selectedLocation || '饒河街夜市',
                imageUrl: null,
                avatarUrl: avatarImg.src
            });

            createNewPost(post);
            resetForm();
        }
    });

    // 修改創建新貼文函數
    function createNewPost(post) {
        const postElement = document.createElement('article');
        postElement.className = 'post';
        postElement.dataset.postId = post.id; // 添加貼文ID
        
        const postHTML = `
            <div class="post-header">
                <img src="${post.avatarUrl}" alt="用戶頭像" class="avatar">
                <div class="post-info">
                    <h3 class="username">${post.username}</h3>
                    ${post.location ? `<span class="location">📍 ${post.location}</span>` : ''}
                </div>
                <button class="delete-post">刪除</button>
            </div>
            <div class="post-content">
                <p>${post.content}</p>
                ${post.imageUrl ? `<img src="${post.imageUrl}" alt="貼文圖片" class="post-image">` : ''}
            </div>
            <div class="post-actions">
                <button class="like-btn ${post.likes > 0 ? 'liked' : ''}">
                    <svg class="icon" viewBox="0 0 24 24">
                        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                    </svg>
                    <span>讚 ${post.likes || 0}</span>
                </button>
                <button class="comment-btn">
                    <svg class="icon" viewBox="0 0 24 24">
                        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                    </svg>
                    <span>留言 ${post.comments?.length || 0}</span>
                </button>
                <button class="share-btn">
                    <svg class="icon" viewBox="0 0 24 24">
                        <path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
                    </svg>
                    <span>分享</span>
                </button>
            </div>
            ${renderComments(post.comments || [])}
        `;
        
        postElement.innerHTML = postHTML;
        postsFeed.insertBefore(postElement, postsFeed.firstChild);

        // 為新貼文添加互動功能
        addPostInteractions(postElement);
    }

    // 添加渲染留言的函數
    function renderComments(comments) {
        if (!comments.length) return '';
        
        const commentsList = comments.map(comment => `
            <div class="comment-item" data-comment-id="${comment.id}">
                <div class="comment-content">
                    <span class="comment-user">${comment.username}</span>
                    <p>${comment.content}</p>
                </div>
                <div class="comment-footer">
                    <span class="comment-time">${new Date(comment.createdAt).toLocaleString()}</span>
                    <button class="delete-comment">刪除</button>
                </div>
            </div>
        `).join('');

        return `
            <div class="comment-section">
                <div class="comment-input-area">
                    <input type="text" placeholder="寫下您的留言..." class="comment-input">
                    <button class="submit-comment">發送</button>
                </div>
                <div class="comments-list">
                    ${commentsList}
                </div>
            </div>
        `;
    }

    // 修改貼文互動功能
    function addPostInteractions(postElement) {
        const postId = postElement.dataset.postId;
        const likeBtn = postElement.querySelector('.like-btn');
        const commentBtn = postElement.querySelector('.comment-btn');
        const shareBtn = postElement.querySelector('.share-btn');
        const deleteBtn = postElement.querySelector('.delete-post');

        // 移除舊的事件監聽器
        const newLikeBtn = likeBtn.cloneNode(true);
        const newShareBtn = shareBtn.cloneNode(true);
        const newDeleteBtn = deleteBtn.cloneNode(true);
        
        likeBtn.parentNode.replaceChild(newLikeBtn, likeBtn);
        shareBtn.parentNode.replaceChild(newShareBtn, shareBtn);
        deleteBtn.parentNode.replaceChild(newDeleteBtn, deleteBtn);

        // 刪除貼文
        newDeleteBtn.addEventListener('click', function() {
            if (confirm('確定要刪除這則貼文嗎？')) {
                window.dataService.deletePost(parseInt(postId));
                postElement.remove();
            }
        });

        // 按讚功能
        newLikeBtn.addEventListener('click', function() {
            const likes = window.dataService.toggleLike(parseInt(postId));
            this.classList.add('liked');
            this.style.color = '#ff4d4d';
            this.querySelector('svg').style.fill = '#ff4d4d';
            this.querySelector('span').textContent = `讚 ${likes}`;
        });

        // 分享功能
        newShareBtn.addEventListener('click', function() {
            const shareDialog = document.createElement('div');
            shareDialog.className = 'share-dialog';
            
            const shareHTML = `
                <div class="share-content">
                    <h3>分享到</h3>
                    <div class="share-options">
                        <button class="share-option" data-platform="facebook">
                            <svg class="share-icon" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                            </svg>
                            Facebook
                        </button>
                        <button class="share-option" data-platform="line">
                            <svg class="share-icon" viewBox="0 0 24 24">
                                <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z"/>
                            </svg>
                            LINE
                        </button>
                        <button class="share-option" data-platform="copy">
                            複製連結
                        </button>
                    </div>
                    <button class="close-share">關閉</button>
                </div>
            `;
            
            shareDialog.innerHTML = shareHTML;
            document.body.appendChild(shareDialog);

            // 處理分享選項點擊
            const shareOptions = shareDialog.querySelectorAll('.share-option');
            shareOptions.forEach(option => {
                option.addEventListener('click', function() {
                    const platform = this.dataset.platform;
                    const postContent = postElement.querySelector('.post-content p').textContent;
                    const shareUrl = window.location.href;

                    switch(platform) {
                        case 'facebook':
                            window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, 
                                'facebook-share', 'width=580,height=296');
                            break;
                        case 'line':
                            window.open(`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrl)}`,
                                'line-share', 'width=580,height=296');
                            break;
                        case 'copy':
                            navigator.clipboard.writeText(shareUrl).then(() => {
                                alert('連結已複製到剪貼板！');
                            });
                            break;
                    }
                    shareDialog.remove();
                });
            });

            // 關閉分享對話框
            const closeBtn = shareDialog.querySelector('.close-share');
            closeBtn.addEventListener('click', () => shareDialog.remove());

            // 點擊對話框外部關閉
            shareDialog.addEventListener('click', function(e) {
                if (e.target === shareDialog) {
                    shareDialog.remove();
                }
            });
        });

        // 留言功能保持不變，因為它是動態創建的
        commentBtn.addEventListener('click', function() {
            // 檢查是否已經存在留言區
            let commentSection = postElement.querySelector('.comment-section');
            
            if (!commentSection) {
                // 如果留言區不存在，創建一個新的
                commentSection = document.createElement('div');
                commentSection.className = 'comment-section';
                commentSection.innerHTML = `
                    <div class="comment-input-area">
                        <input type="text" placeholder="寫下您的留言..." class="comment-input">
                        <button class="submit-comment">發送</button>
                    </div>
                    <div class="comments-list"></div>
                `;
                postElement.appendChild(commentSection);

                // 綁定發送留言事件
                const submitBtn = commentSection.querySelector('.submit-comment');
                const commentInput = commentSection.querySelector('.comment-input');

                submitBtn.addEventListener('click', function() {
                    const content = commentInput.value.trim();
                    if (content) {
                        const comment = window.dataService.addComment(parseInt(postId), {
                            username: nicknameInput.value || '匿名用戶',
                            content: content
                        });

                        if (comment) {
                            const commentsList = commentSection.querySelector('.comments-list');
                            const commentElement = document.createElement('div');
                            commentElement.className = 'comment-item';
                            commentElement.dataset.commentId = comment.id;
                            commentElement.innerHTML = `
                                <div class="comment-content">
                                    <span class="comment-user">${comment.username}</span>
                                    <p>${comment.content}</p>
                                </div>
                                <div class="comment-footer">
                                    <span class="comment-time">${new Date(comment.createdAt).toLocaleString()}</span>
                                    <button class="delete-comment">刪除</button>
                                </div>
                            `;

                            commentsList.insertBefore(commentElement, commentsList.firstChild);
                            commentInput.value = '';
                            
                            // 更新留言數
                            const commentCount = commentSection.querySelectorAll('.comment-item').length;
                            this.querySelector('span').textContent = `留言 ${commentCount}`;
                        }
                    }
                });

                // 支持按Enter發送留言
                commentInput.addEventListener('keypress', function(e) {
                    if (e.key === 'Enter') {
                        submitBtn.click();
                    }
                });
            }

            // 切換留言區的顯示/隱藏
            commentSection.classList.toggle('hidden');
        });
    }

    // 修改渲染已存在貼文的函數
    function renderExistingPosts() {
        const posts = window.dataService.getPosts();
        postsFeed.innerHTML = ''; // 清空現有貼文
        
        // 反轉數組順序，這樣最新的貼文會在最上面
        posts.reverse().forEach(post => {
            const postElement = document.createElement('article');
            postElement.className = 'post';
            postElement.dataset.postId = post.id;
            
            postElement.innerHTML = createPostHTML(post);
            postsFeed.appendChild(postElement);  // 使用 appendChild 而不是 insertBefore
            
            // 添加互動功能
            addPostInteractions(postElement);
        });
    }

    // 新增一個函數來生成貼文的 HTML
    function createPostHTML(post) {
        return `
            <div class="post-header">
                <img src="${post.avatarUrl}" alt="用戶頭像" class="avatar">
                <div class="post-info">
                    <h3 class="username">${post.username}</h3>
                    ${post.location ? `<span class="location">📍 ${post.location}</span>` : ''}
                </div>
                <button class="delete-post">刪除</button>
            </div>
            <div class="post-content">
                <p>${post.content}</p>
                ${post.imageUrl ? `<img src="${post.imageUrl}" alt="貼文圖片" class="post-image">` : ''}
            </div>
            <div class="post-actions">
                <button class="like-btn ${post.likes > 0 ? 'liked' : ''}">
                    <svg class="icon" viewBox="0 0 24 24">
                        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                    </svg>
                    <span>讚 ${post.likes || 0}</span>
                </button>
                <button class="comment-btn">
                    <svg class="icon" viewBox="0 0 24 24">
                        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                    </svg>
                    <span>留言 ${post.comments?.length || 0}</span>
                </button>
                <button class="share-btn">
                    <svg class="icon" viewBox="0 0 24 24">
                        <path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
                    </svg>
                    <span>分享</span>
                </button>
            </div>
            ${renderComments(post.comments || [])}
        `;
    }

    // 初始化頁面
    renderExistingPosts();

    // 重置表單
    function resetForm() {
        nicknameInput.value = '';
        postTextarea.value = '';
        postImage = null;
        selectedLocation = '';
        uploadPhotoBtn.style.backgroundColor = '';
        uploadPhotoBtn.style.color = '';
        locationTagBtn.style.backgroundColor = '';
        locationTagBtn.style.color = '';
    }

    // 為現有的示例貼文添加互動功能
    document.querySelectorAll('.post').forEach(addPostInteractions);
});
