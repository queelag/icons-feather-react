import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherShieldElement } from '@aracna/icons-feather-web/elements/shield-element'

export const IconFeatherShield: ElementComponent<IconFeatherShieldElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherShieldElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-shield', IconFeatherShieldElement)
