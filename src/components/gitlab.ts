import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherGitlabElement } from '@aracna/icons-feather-web/elements/gitlab-element'

export const IconFeatherGitlab: ElementComponent<IconFeatherGitlabElement, IconProps> = createBaseElementComponent<
  IconFeatherGitlabElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-gitlab', IconFeatherGitlabElement)
