import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherFileTextElement } from '@aracna/icons-feather-web/elements/file-text-element'

export const IconFeatherFileText: ElementComponent<IconFeatherFileTextElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherFileTextElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-file-text', IconFeatherFileTextElement)
