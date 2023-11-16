import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherGitlabElement } from '@aracna/icons-feather-web/elements/gitlab-element'

export const IconFeatherGitlab: ElementComponent<IconFeatherGitlabElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherGitlabElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-gitlab', IconFeatherGitlabElement)
