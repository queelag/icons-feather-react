import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherGitBranchElement } from '@aracna/icons-feather-web/elements/git-branch-element.js'

export const IconFeatherGitBranch: ElementComponent<IconFeatherGitBranchElement, IconProps> = createBaseElementComponent<
  IconFeatherGitBranchElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-git-branch', IconFeatherGitBranchElement)
