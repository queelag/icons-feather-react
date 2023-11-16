import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherUserPlusElement } from '@aracna/icons-feather-web/elements/user-plus-element'

export const IconFeatherUserPlus: ElementComponent<IconFeatherUserPlusElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherUserPlusElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-user-plus', IconFeatherUserPlusElement)
