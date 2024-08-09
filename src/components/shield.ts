import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherShieldElement } from '@aracna/icons-feather-web/elements/shield-element'

export const IconFeatherShield: ElementComponent<IconFeatherShieldElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherShieldElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-shield', IconFeatherShieldElement)
