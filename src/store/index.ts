import { Session } from "@supabase/supabase-js";
import { atom } from "jotai";

export const loginAtom = atom<Session | null>(null)