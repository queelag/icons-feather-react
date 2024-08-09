import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherUserXElement } from '@aracna/icons-feather-web/elements/user-x-element'

export const IconFeatherUserX: ElementComponent<IconFeatherUserXElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherUserXElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-user-x', IconFeatherUserXElement)
