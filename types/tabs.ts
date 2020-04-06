/**
 * Documentation Reference
 * https://api.slack.com/reference/surfaces/views
 */

import { Actions, Context, Divider, Section, Image } from "./blocks";

export interface HomeTab {
    type: "home";
    blocks: (Actions | Context | Divider | Image | Section)[];
    private_metadata?: string;
    callback_id?: string;
    external_id?: string;
}
