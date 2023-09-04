import {atomWithStorage} from "jotai/utils";

import type {AuthData} from "~/interfaces/services/auth/login";

export const authUserAtom = atomWithStorage<AuthData | null>("authUser", null);
