import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherShieldOffElement } from '@aracna/icons-feather-web/elements/shield-off-element'

export const IconFeatherShieldOff: ElementComponent<IconFeatherShieldOffElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherShieldOffElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-shield-off', IconFeatherShieldOffElement)
