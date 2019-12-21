import React, { FunctionComponent } from 'react';

export interface HtmlTemplateProps {
  content: string;
}

export const HtmlTemplate: FunctionComponent<HtmlTemplateProps> = ({
  content,
  ...rest
}: HtmlTemplateProps): JSX.Element => <div dangerouslySetInnerHTML={{ __html: content }} {...rest} />;
