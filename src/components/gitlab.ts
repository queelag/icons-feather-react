import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherGitlabElement } from '@aracna/icons-feather-web/elements/gitlab-element'

export const IconFeatherGitlab: ElementComponent<IconFeatherGitlabElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherGitlabElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-gitlab', IconFeatherGitlabElement)
