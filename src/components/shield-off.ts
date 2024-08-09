import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherShieldOffElement } from '@aracna/icons-feather-web/elements/shield-off-element'

export const IconFeatherShieldOff: ElementComponent<IconFeatherShieldOffElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherShieldOffElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-shield-off', IconFeatherShieldOffElement)
