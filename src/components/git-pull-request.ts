import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherGitPullRequestElement } from '@aracna/icons-feather-web/elements/git-pull-request-element'

export const IconFeatherGitPullRequest: ElementComponent<IconFeatherGitPullRequestElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherGitPullRequestElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-git-pull-request', IconFeatherGitPullRequestElement)
