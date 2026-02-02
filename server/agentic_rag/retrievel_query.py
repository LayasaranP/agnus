queries = """ 
Basic factual recall (testing whether core facts are retrieved accurately)

1. When was the Transformer architecture introduced and in which paper?
Who are the authors of the "Attention is All You Need" paper?
What is the main innovation of the Transformer compared to recurrent and convolutional models?
What year was Retrieval-Augmented Generation (RAG) originally formulated?
What are the two types of memory combined in RAG?

Mechanism and component-focused questions (testing deeper retrieval of explanations)

Explain how self-attention works in the Transformer architecture.
What is multi-head attention and why is it used in Transformers?
Why are Transformers more efficient to train on GPU/TPU hardware compared to RNNs?
In a typical RAG setup, what role does a dense retriever like DPR or ColBERT play?
Which seq2seq models are commonly used as the generator in early RAG systems?

Comparison and advantage-oriented questions (testing synthesis across sentences/paragraphs)

How does the Transformer architecture improve upon previous approaches in capturing long-range dependencies?
What advantages does RAG provide over purely parametric large language models?
In what kinds of tasks does RAG tend to produce more factually accurate answers?
Why can RAG handle information that appeared after a model's training cutoff date?

Modern/evolved RAG techniques (testing retrieval of the later part of the text)

Name some advanced techniques used in modern RAG systems beyond the original 2020 formulation. What is HyDE in the 
context of RAG retrieval? How do iterative retrieval or recursive retrieval improve RAG performance? What are some 
common post-retrieval techniques used in production RAG deployments, like re-ranking or context compression? What is 
fusion-in-decoder and how does it relate to RAG architectures? Name a few query optimization methods mentioned for 
better retrieval in modern RAG, such as query rewriting or hypothetical question generation.

Edge/tricky/nuanced questions (testing precision, avoidance of hallucination, and handling of specifics)

Does the Transformer still use any recurrent or convolutional layers? (should retrieve "dispensing with" / "entirely on attention")
Is ColBERT typically used as a sparse or dense retriever in RAG?
What is one reason chunking strategies in modern RAG are optimized for semantic units rather than fixed token counts?
According to the content, can RAG eliminate the need for full-model retraining when incorporating new knowledge?
What self-improvement mechanism is sometimes added to production RAG systems where the model evaluates its own retrieved context?
"""