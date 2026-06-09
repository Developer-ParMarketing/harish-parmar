"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import BlogForm from "../../../../components/admin/BlogForm";
import { api } from "@/app/variables";



const EditBlogPage = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await fetch(`${api}/blog/admin/${id}`, { credentials: "include" });
                const data = await res.json();
                if (data.success) {
                    setBlog(data.data);
                } else {
                    setError(data.message || "Blog not found.");
                }
            } catch {
                setError("Could not reach the server.");
            } finally {
                setLoading(false);
            }
        };
        fetchBlog();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#f7f6f3] flex items-center justify-center">
                <p className="text-[12px] uppercase tracking-[4px] text-black/40">Loading blog...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-[#f7f6f3] flex items-center justify-center">
                <p className="text-[13px] text-red-500">{error}</p>
            </div>
        );
    }

    return <BlogForm initialData={blog} blogId={id} />;
};

export default EditBlogPage;