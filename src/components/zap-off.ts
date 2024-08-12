import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherZapOffElement } from '@aracna/icons-feather-web/elements/zap-off-element'

export const IconFeatherZapOff: ElementComponent<IconFeatherZapOffElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherZapOffElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-zap-off', IconFeatherZapOffElement)
