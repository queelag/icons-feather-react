import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherGitMergeElement } from '@aracna/icons-feather-web/elements/git-merge-element'

export const IconFeatherGitMerge: ElementComponent<IconFeatherGitMergeElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherGitMergeElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-git-merge', IconFeatherGitMergeElement)
