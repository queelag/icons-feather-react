import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherGitlabElement } from '@aracna/icons-feather-web/elements/gitlab-element'

export const IconFeatherGitlab: ElementComponent<IconFeatherGitlabElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherGitlabElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-gitlab', IconFeatherGitlabElement)
