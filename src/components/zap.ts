import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherZapElement } from '@aracna/icons-feather-web/elements/zap-element'

export const IconFeatherZap: ElementComponent<IconFeatherZapElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherZapElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-zap', IconFeatherZapElement)
