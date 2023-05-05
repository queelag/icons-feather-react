import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherGitPullRequestElement } from '@aracna/icons-feather-web/elements/git-pull-request-element.js'

export const IconFeatherGitPullRequest: ElementComponent<IconFeatherGitPullRequestElement, IconProps> = createBaseElementComponent<
  IconFeatherGitPullRequestElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-git-pull-request', IconFeatherGitPullRequestElement)
