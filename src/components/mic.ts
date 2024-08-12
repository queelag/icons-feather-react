import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherMicElement } from '@aracna/icons-feather-web/elements/mic-element'

export const IconFeatherMic: ElementComponent<IconFeatherMicElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherMicElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-mic', IconFeatherMicElement)
