import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherUserElement } from '@aracna/icons-feather-web/elements/user-element'

export const IconFeatherUser: ElementComponent<IconFeatherUserElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherUserElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-user', IconFeatherUserElement)
