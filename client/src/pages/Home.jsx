import React from "react";
import { useSelector } from "react-redux";
import HomeCard from "../components/HomeCard";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { postsAction } from "../redux/actions/post";

const Home = () => {

    const dispatch = useDispatch();
    const { posts } = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch(postsAction());
    }, [dispatch]);

    console.log(posts);

    return (
        <div className="flex items-center m-5 flex-wrap">
            {posts && posts?.map((post, i) => (
                <HomeCard key={i} post={post} />
            ))}
        </div>
    );
}

export default Home;