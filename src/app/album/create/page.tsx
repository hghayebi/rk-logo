"use client";
import MediaBox from "@/components/MediaBox";
import { store } from "@/store";
import React from "react";
import { Provider } from "react-redux";

export default function CreaetAlbum() {
  return (
    <Provider store={store}>
      <div className="flex justify-center">
        <MediaBox />
      </div>
    </Provider>
  );
}
