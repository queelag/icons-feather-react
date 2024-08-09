import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherUserPlusElement } from '@aracna/icons-feather-web/elements/user-plus-element'

export const IconFeatherUserPlus: ElementComponent<IconFeatherUserPlusElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherUserPlusElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-user-plus', IconFeatherUserPlusElement)
