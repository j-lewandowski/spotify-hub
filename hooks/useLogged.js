"use client";

import { useEffect, useState, Dispatch, SetStateAction } from "react";

export default function useLogged() {
  const [loggedIn, setLoggedIn] = useState(false);

  return [loggedIn, setLoggedIn];
}
