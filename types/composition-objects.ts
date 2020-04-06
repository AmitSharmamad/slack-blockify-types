/**
 * Documentation Reference
 * https://api.slack.com/reference/block-kit/composition-objects
 */

type TextType = Plain | WithMrkdwn;

export type Plain = "plain_text";
export type WithMrkdwn = Plain | "mrkdwn";

export interface Text<T extends TextType> {
    type: T;
    text: string;
    emoji?: boolean;
    verbatim?: boolean;
}

export interface ConfirmationDialog {
    title: Text<Plain>;
    text: Text<WithMrkdwn>;
    confirm: Text<Plain>;
    deny: Text<Plain>;
}

export interface Option {
    text: Text<WithMrkdwn>;
    value: string;
    description?: Text<WithMrkdwn>;
    url?: string;
}

export interface OptionGroup {
    label: Text<Plain>;
    options: Option[];
}

export interface FilterConversations {
    include?: string[];
    exclude_external_shared_channels?: boolean;
    exclude_bot_users?: boolean;
}
