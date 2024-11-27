//localStorage網頁儲存
const dataService = {
    posts: JSON.parse(localStorage.getItem('posts')) || [],
    avatars: JSON.parse(localStorage.getItem('avatars')) || {},

    // 保存用戶頭像
    saveAvatar(username, avatarBase64) {
        this.avatars[username] = avatarBase64;
        localStorage.setItem('avatars', JSON.stringify(this.avatars));
    },

    // 獲取用戶頭像//50是50*50大小回傳使用著的大頭貼或是預設大頭貼
    getAvatar(username) {
        return this.avatars[username] || 'https://via.placeholder.com/50';
    },

    // 獲取所有貼文
    //透過兩個日期的-法來排序貼文
    //越新的貼文在越上方
    getPosts() {
        return this.posts.sort((a, b) => {
            return new Date(a.createdAt) - new Date(b.createdAt);
        });
    },

    // 添加新貼文
    addPost(postData) {
        const post = {
            id: Date.now(),//使用著當前的最新時間
            content: postData.content,//內容
            username: postData.username,//名字
            location: postData.location,//地區
            imageUrl: postData.imageUrl,    // 貼文圖片的 base64
            avatarUrl: postData.avatarUrl,  // 用戶頭像的 base64
            likes: 0,//讚 預設值是0
            comments: [],//留言
            createdAt: new Date().toISOString()//發文時間
        };
        
        // 除存用戶頭像
        if (postData.avatarUrl) {
            this.saveAvatar(postData.username, postData.avatarUrl);
        }

        // 將新貼文添加到數組開頭
        this.posts.unshift(post);
        
        // 保存到 localStorage
        this.savePosts();
        
        return post;
    },

    // 添加留言
    addComment(postId, comment) {
        const post = this.posts.find(p => p.id === postId);
        if (post) {
            if (!post.comments) {
                post.comments = [];
            }
            
            const newComment = {
                id: Date.now(),
                username: comment.username,
                content: comment.content,
                createdAt: new Date().toISOString()
            };
            
            post.comments.push(newComment);
            this.savePosts();
            return newComment;
        }
        return null;
    },

    // 更新讚數
    toggleLike(postId) {
        const post = this.posts.find(p => p.id === postId);
        if (post) {
            if (!post.isLiked) {  // 添加一個標記，確保只能按讚一次
                post.likes = (post.likes || 0) + 1;
                post.isLiked = true;
                this.savePosts();
            }
            return post.likes;
        }
        return 0;
    },

    // 刪除貼文
    deletePost(postId) {
        const index = this.posts.findIndex(p => p.id === postId);
        if (index !== -1) {
            this.posts.splice(index, 1);
            this.savePosts();
            return true;
        }
        return false;
    },

    // 保存貼文到 localStorage
    savePosts() {
        try {
            localStorage.setItem('posts', JSON.stringify(this.posts));
            return true;
        } catch (e) {
            console.error('保存貼文失敗：', e);
            // 如果 localStorage 已滿，可以考慮清理舊數據
            if (e.name === 'QuotaExceededError') {
                // 刪除最舊的貼文
                if (this.posts.length > 1000) {
                    this.posts = this.posts.slice(0, 1000);
                    this.savePosts();
                }
            }
            return false;
        }
    },

    // 清理數據（用於測試）
    clearAll() {
        this.posts = [];
        this.avatars = {};
        localStorage.removeItem('posts');
        localStorage.removeItem('avatars');
    }
};

// 使其全局可用
window.dataService = dataService; 