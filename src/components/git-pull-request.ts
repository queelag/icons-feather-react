import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherGitPullRequestElement } from '@aracna/icons-feather-web/elements/git-pull-request-element'

export const IconFeatherGitPullRequest: ElementComponent<IconFeatherGitPullRequestElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherGitPullRequestElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-git-pull-request', IconFeatherGitPullRequestElement)
