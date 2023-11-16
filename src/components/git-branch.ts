import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherGitBranchElement } from '@aracna/icons-feather-web/elements/git-branch-element'

export const IconFeatherGitBranch: ElementComponent<IconFeatherGitBranchElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherGitBranchElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-git-branch', IconFeatherGitBranchElement)
