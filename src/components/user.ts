import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherUserElement } from '@aracna/icons-feather-web/elements/user-element'

export const IconFeatherUser: ElementComponent<IconFeatherUserElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherUserElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-user', IconFeatherUserElement)
